module.exports = (plop) => {
  plop.setGenerator('base', {
    description: 'Create a base component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your base component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/base/{{pascalCase name}}/index.tsx',
        templateFile: 'generators/base/index.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/base/{{pascalCase name}}/{{pascalCase name}}.style.ts',
        templateFile: 'generators/base/base.style.ts.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/base/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
        templateFile: 'generators/base/base.view.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/base/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'generators/base/base.stories.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/base/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'generators/base/base.test.tsx.hbs',
      },
    ],
  });
  plop.setGenerator('module', {
    description: 'Create a module component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your module component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/module/{{pascalCase name}}/index.tsx',
        templateFile: 'generators/module/index.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/module/{{pascalCase name}}/{{pascalCase name}}.style.ts',
        templateFile: 'generators/module/module.style.ts.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/module/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
        templateFile: 'generators/module/module.view.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/module/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'generators/module/module.stories.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/module/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'generators/module/module.test.tsx.hbs',
      },
    ],
  });
  plop.setGenerator('smart module', {
    description: 'Create a smart module component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your smart module component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/module/{{pascalCase name}}/index.tsx',
        templateFile: 'generators/smart-module/index.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/module/{{pascalCase name}}/{{pascalCase name}}.props.ts',
        templateFile: 'generators/smart-module/module.props.ts.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/module/{{pascalCase name}}/{{pascalCase name}}.style.ts',
        templateFile: 'generators/smart-module/module.style.ts.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/module/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
        templateFile: 'generators/smart-module/module.view.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/module/{{pascalCase name}}/{{pascalCase name}}.container.tsx',
        templateFile: 'generators/smart-module/module.container.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/module/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'generators/smart-module/module.stories.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/module/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'generators/smart-module/module.test.tsx.hbs',
      },
    ],
  });
  plop.setGenerator('layout', {
    description: 'Create a layout component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your layout component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/layout/{{pascalCase name}}/index.tsx',
        templateFile: 'generators/layout/index.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/layout/{{pascalCase name}}/{{pascalCase name}}.style.ts',
        templateFile: 'generators/layout/layout.style.ts.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/layout/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
        templateFile: 'generators/layout/layout.view.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/layout/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'generators/layout/layout.stories.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/layout/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'generators/layout/layout.test.tsx.hbs',
      },
    ],
  });
  plop.setGenerator('route', {
    description: 'Create a route component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your route name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/routes/{{pascalCase name}}/index.tsx',
        templateFile: 'generators/route/index.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/routes/{{pascalCase name}}/{{pascalCase name}}.props.ts',
        templateFile: 'generators/route/route.props.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/routes/{{pascalCase name}}/{{pascalCase name}}.style.ts',
        templateFile: 'generators/route/route.style.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/routes/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
        templateFile: 'generators/route/route.view.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/routes/{{pascalCase name}}/{{pascalCase name}}.container.tsx',
        templateFile: 'generators/route/route.container.tsx.hbs',
      },
    ],
  });
};
