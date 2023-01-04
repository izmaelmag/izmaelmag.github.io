module.exports = function plopGenerator(plop) {
  plop.setGenerator("component", {
    description: "Creates new react component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name",
      },
    ],
    actions: [
      {
        type: "add",
        skipIfExists: true,
        path: "components/{{ pascalCase name }}/index.ts",
        templateFile: "config/plop/component/index.ts.hbs",
      },
      {
        type: "add",
        skipIfExists: true,
        path: "components/{{ pascalCase name }}/styles.module.css",
        templateFile: "config/plop/component/styles.module.css",
      },
      {
        type: "add",
        skipIfExists: true,
        path: "components/{{ pascalCase name }}/{{ pascalCase name }}.tsx",
        templateFile: "config/plop/component/component.tsx.hbs",
      },
    ],
  });
};
