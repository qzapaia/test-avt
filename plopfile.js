const { lstatSync, readdirSync, unlinkSync } = require('fs')
const { join, sep, resolve } = require('path')

const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory)

const getDirectDirectories = source => getDirectories(source).map(p=>p.split(sep).pop())

const GLOBAL_UI = 'global';
const STYLED_COMPONENT_TYPE = 'Styled Component';
const COMPONENT_TYPE = 'Component';

const toPascalCase = require('to-pascal-case');


module.exports = function (plop) {
  plop.setGenerator('Create', {
      description: 'Create a Component',
      prompts: [{
          type: 'input',
          name: 'name',
          message: 'Component name?',
          validate: function (value) {
              if ((/.+/).test(value)) { return true; }
              return 'name is required';
          }
      },
      {
          type: 'list',
          name: 'type',
          message: 'Component Type?',
          choices: [COMPONENT_TYPE, STYLED_COMPONENT_TYPE]
      },
      {
          type: 'list',
          name: 'ui',
          message: 'UI?',
          choices: [GLOBAL_UI].concat(getDirectDirectories('./src'))
      }],
      actions: function(data){
        const dirName = data.ui == GLOBAL_UI ? 'src' : 'src/'+data.ui;
        const actions = [];

        data.componentName = toPascalCase(data.name);
        data.storyDir = data.ui + '/';
        data.componentExtension = data.type == STYLED_COMPONENT_TYPE ? '.styled' : '';

        if(data.type == STYLED_COMPONENT_TYPE){
          actions.push({
            type: 'add',
            path: dirName + '/{{componentName}}.styled.js',
            templateFile: 'plop-templates/Component.styled.js'
          });
        }else if(data.type == COMPONENT_TYPE){
          actions.push({
            type: 'add',
            path: dirName + '/{{componentName}}.js',
            templateFile: 'plop-templates/Component.js'
          });
        }

        actions.push({
            type: 'add',
            path: dirName + '/{{componentName}}.stories.js',
            templateFile: 'plop-templates/Component.stories.js'
        });

        return actions;
      }
  });

  plop.setGenerator('Remove', {
      description: 'Remove a Component',
      prompts: [{
          type: 'input',
          name: 'name',
          message: 'Component name?',
          validate: function (value) {
              if ((/.+/).test(value)) { return true; }
              return 'name is required';
          }
      },
      {
          type: 'list',
          name: 'ui',
          message: 'UI?',
          choices: [GLOBAL_UI].concat(getDirectDirectories('./src'))
      }],
      actions: function(data){
        const dirName = data.ui == GLOBAL_UI ? 'src' : 'src/'+data.ui;
        const actions = [];

        data.componentName = toPascalCase(data.name);
        data.storyDir = data.ui + '/';

        actions.push((answers)=>{
          const filesToRemove = [];

          filesToRemove.push(plop.renderString('{{componentName}}.js', answers))
          filesToRemove.push(plop.renderString('{{componentName}}.styled.js', answers))
          filesToRemove.push(plop.renderString('{{componentName}}.stories.js', answers))

          filesToRemove.forEach(fileName=>{
            const filePath = resolve(__dirname, dirName, fileName);
            try{
              unlinkSync(filePath)
            }catch(e){
              console.warn('WARNING: Could not remove', filePath);
            }
          })

          return 'Component removed';
        })


        return actions;
      }
  });
};
