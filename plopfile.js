const { lstatSync, readdirSync, unlinkSync } = require('fs')
const { join, sep, resolve } = require('path')
const rimraf = require('rimraf');


const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory)

const getDirectDirectories = source => getDirectories(source).map(p=>p.split(sep).pop())

const GLOBAL_UI = 'global';

const YES = 'Yes';
const NO = 'No';

const STYLED_COMPONENT_TYPE = 'Styled Component';
const COMPONENT_TYPE = 'Stateless Component';

const toPascalCase = require('to-pascal-case');


module.exports = function (plop) {
  plop.setGenerator('Create', {
      description: 'Create a Component',
      prompts: [{
          type: 'input',
          name: 'name',
          message: 'name? (it will be pascalized)',
          validate: function (value) {
              if ((/.+/).test(value)) { return true; }
              return 'name is required';
          }
      },
      {
          type: 'confirm',
          name: 'redux',
          message: 'Include Redux reducer/actions?'
      },
      {
          type: 'confirm',
          name: 'withData',
          message: 'Include Apollo "withData" component?'
      },
      {
          type: 'list',
          name: 'type',
          message: 'Type?',
          choices: [COMPONENT_TYPE, STYLED_COMPONENT_TYPE]
      },
      {
          type: 'list',
          name: 'ui',
          message: 'UI?',
          choices: getDirectDirectories('./src')
      }],
      actions: function(data){
        const dirName = 'src/'+data.ui;
        const actions = [];

        data.componentName = toPascalCase(data.name);
        data.storyPath = data.ui + '/';

        data.withDataComponent = data.withData;
        data.styledComponent = data.type == STYLED_COMPONENT_TYPE;

        actions.push({
          type: 'add',
          path: dirName + '/{{componentName}}/index.js',
          templateFile: data.type == COMPONENT_TYPE ?
                                     'plop-templates/Component.js' :
                                     'plop-templates/Component.styled.js'
        });

        if(data.withDataComponent){
          actions.push({
            type: 'add',
            path: dirName + '/{{componentName}}/withData.js',
            templateFile: 'plop-templates/Component.withData.js'
          });
        }

        if(data.redux){
          actions.push({
            type: 'add',
            path: dirName + '/{{componentName}}/reducer.js',
            templateFile: 'plop-templates/Component.reducer.js'
          });

          actions.push({
            type: 'add',
            path: dirName + '/{{componentName}}/actions.js',
            templateFile: 'plop-templates/Component.actions.js'
          });
        }

        actions.push({
            type: 'add',
            path: dirName + '/{{componentName}}/stories.js',
            templateFile: 'plop-templates/Component.stories.js'
        });

        actions.push({
            type: 'add',
            path: dirName + '/{{componentName}}/README.md',
            templateFile: 'plop-templates/Component.README.md'
        });

        return actions;
      }
  });

  plop.setGenerator('Remove', {
      description: 'Remove a Component',
      prompts: [{
          type: 'input',
          name: 'name',
          message: 'name?',
          validate: function (value) {
              if ((/.+/).test(value)) { return true; }
              return 'name is required';
          }
      },
      {
          type: 'list',
          name: 'ui',
          message: 'UI?',
          choices: getDirectDirectories('./src')
      }],
      actions: function(data){
        const actions = [];

        actions.push((answers)=>{
          rimraf('src/' + data.ui + '/' + toPascalCase(data.name),()=>{
            console.log('Component removed');
          });
          return 'All right';
        })

        return actions;
      }
  });
};
