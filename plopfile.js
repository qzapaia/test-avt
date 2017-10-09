const { lstatSync, readdirSync, unlinkSync } = require('fs')
const { join, sep, resolve } = require('path')
const rimraf = require('rimraf');
const cp = require('cp');
const path = require('path');
const dl = require('directory-list');
const replace = require('replace-in-file');

const GLOBAL_UI = 'global';
const AVANTRIP_UI = 'avantrip';
const QUIERO_UI = 'quiero';

const YES = 'Yes';
const NO = 'No';

const STYLED_COMPONENT_TYPE = 'Styled Component';
const COMPONENT_TYPE = 'Stateless Component';

const ui_options = [AVANTRIP_UI,QUIERO_UI];
const all_ui_options = [GLOBAL_UI].concat(ui_options);
const component_types = [COMPONENT_TYPE, STYLED_COMPONENT_TYPE];

const toPascalCase = require('to-pascal-case');

let globalComponents;

dl.list(__dirname+'/src/global/', true, function(files) {
  globalComponents = files;
});

module.exports = function (plop) {

  plop.setActionType('copy', function (answers, config, plop) {

    let { from,  to, replaceFrom, replaceTo } = config
    const fromPath = plop.renderString(path.join(__dirname, from), answers);
    const toPath = plop.renderString(path.join(__dirname, to), answers);

		cp.sync(fromPath, toPath);

    replaceFrom.map && (replaceFrom=replaceFrom.map(r=>plop.renderString(r, answers)) )
    replaceTo.map && ( replaceTo=replaceTo.map(r=>plop.renderString(r, answers)) )

    replace.sync({
      files: toPath,
      from: replaceFrom || '',
      to: replaceTo || '',
    });

    return 'OK';
	});

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
        type: 'list',
        name: 'type',
        message: 'Type?',
        choices: component_types
      },
      {
          type: 'confirm',
          name: 'redux',
          message: 'Include Redux reducer/actions?',
          when: res=>res.type != STYLED_COMPONENT_TYPE
      },
      {
          type: 'confirm',
          name: 'withData',
          message: 'Include Apollo/Redux "withData" component?',
          when: res=>res.type != STYLED_COMPONENT_TYPE
      },
      {
          type: 'list',
          name: 'ui',
          message: 'UI?',
          choices: all_ui_options
      }],
      actions: function(data){
        const dirName = 'src/'+data.ui;
        const actions = [];
        const isStyled = data.type == STYLED_COMPONENT_TYPE;

        data.componentName = toPascalCase(data.name);
        data.storyPath = data.ui + '/' + (isStyled ? 'styled@' : '');

        data.withDataComponent = data.withData;
        data.styledComponent = isStyled;

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

        actions.push({
            type: 'add',
            path: dirName + '/{{componentName}}/styled.js',
            templateFile: 'plop-templates/styled.js'
        });

        return actions;
      }
  });

  plop.setGenerator('Create Extension', {
      description: 'Create a Global Component Sub Component',
      prompts: [{
          type: 'list',
          name: 'name',
          message: 'Global component to extend',
          choices: globalComponents,
          validate: function (value) {
              if ((/.+/).test(value)) { return true; }
              return 'name is required';
          }
      },
      {
          type: 'list',
          name: 'ui',
          message: 'UI?',
          choices: ui_options
      }],
      actions: function(data){
        const dirName = 'src/'+data.ui;
        const actions = [];
        const isStyled = data.type == STYLED_COMPONENT_TYPE;
        data.storyPath = data.ui + '/';

        data.componentName = toPascalCase(data.name);


        actions.push({
          type: 'add',
          path: dirName + '/{{componentName}}/index.js',
          templateFile: 'plop-templates/Component.extension.js'
        });

        actions.push({
          type: 'add',
          path: dirName + '/{{componentName}}/withData.js',
          templateFile: 'plop-templates/Component.withData.extension.js'
        });

        actions.push({
          type: 'add',
          path: dirName + '/{{componentName}}/reducer.js',
          templateFile: 'plop-templates/Component.reducer.extension.js'
        });

        actions.push({
          type: 'add',
          path: dirName + '/{{componentName}}/theme.js',
          templateFile: 'plop-templates/Component.theme.js'
        });



        actions.push({
            type: 'copy',
            from: 'src/global/{{componentName}}/stories.js',
            to: dirName + '/{{componentName}}/stories.js',
            replaceFrom: [
              'global/',
              'from "./README.md"',
              "from './README.md'",
            ],
            replaceTo: [
              data.ui+'/',
              "from '../../global/{{componentName}}/README.md'",
              "from '../../global/{{componentName}}/README.md'",
            ],
        });

        return actions;
      }
  });

  plop.setGenerator('Clone Story', {
      description: 'Clone the story',
      prompts: [{
          type: 'list',
          name: 'name',
          message: 'Global component to clone the story from',
          choices: globalComponents,
          validate: function (value) {
              if ((/.+/).test(value)) { return true; }
              return 'name is required';
          }
      },
      {
          type: 'list',
          name: 'ui',
          message: 'UI?',
          choices: ui_options
      }],
      actions: function(data){
        const dirName = 'src/'+data.ui;
        const actions = [];

        data.storyPath = data.ui + '/';
        data.componentName = toPascalCase(data.name);

        actions.push({
            type: 'copy',
            from: 'src/global/{{componentName}}/stories.js',
            to: dirName + '/{{componentName}}/stories.js',
            replaceFrom: [
              'global/',
              'from "./README.md"',
              "from './README.md'",
            ],
            replaceTo: [
              data.ui+'/',
              "from '../../global/{{componentName}}/README.md'",
              "from '../../global/{{componentName}}/README.md'",
            ],
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
          choices: all_ui_options
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
