export const rules = {
  'no-unresolved': require('./rules/no-unresolved'),
  'named': require('./rules/named'),
  'default': require('./rules/default'),
  'namespace': require('./rules/namespace'),
  'no-namespace': require('./rules/no-namespace'),
  'export': require('./rules/export'),
  'no-mutable-exports': require('./rules/no-mutable-exports'),
  'extensions': require('./rules/extensions'),

  'no-named-as-default': require('./rules/no-named-as-default'),
  'no-named-as-default-member': require('./rules/no-named-as-default-member'),

  'no-commonjs': require('./rules/no-commonjs'),
  'no-amd': require('./rules/no-amd'),
  'no-duplicates': require('./rules/no-duplicates'),
  'imports-first': require('./rules/imports-first'),
  'no-extraneous-dependencies': require('./rules/no-extraneous-dependencies'),
  'no-nodejs-modules': require('./rules/no-nodejs-modules'),
  'order': require('./rules/order'),
  'newline-after-import': require('./rules/newline-after-import'),

  // metadata-based
  'no-deprecated': require('./rules/no-deprecated'),
}

export const configs = {
  'errors': require('../config/errors'),
  'warnings': require('../config/warnings'),

  // useful stuff for folks using React
  'react': require('../config/react'),

  // shhhh... work in progress "secret" rules
  'stage-0': require('../config/stage-0'),
}
