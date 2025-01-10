/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'SEO Wizard',
      collapsed: false,
      items: [
        'seo-wizard/index',
        'seo-wizard/privacy-policy',
      ],
    },
  ],
};

module.exports = sidebars; 