const isEnvProduction = process.env.NODE_ENV === 'production';

module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-idiomatic-order'
    ],
    plugins: [
        'stylelint-scss',
        'stylelint-order'
    ],
    rules: {
        'declaration-block-single-line-max-declarations': isEnvProduction ? null : 1,
        'no-descending-specificity': isEnvProduction ? null : true,
        'no-duplicate-selectors': isEnvProduction ? null : true,
        indentation: 4,
        'no-empty-source': null,
        'no-invalid-double-slash-comments': null,
        'selector-pseudo-element-no-unknown': null,
        'at-rule-no-unknown': null,
        'at-rule-empty-line-before': ['always', {
            except: [
                'first-nested',
                'blockless-after-same-name-blockless'
            ],
            ignore: ['after-comment']
        }],
        'color-hex-case': 'lower',
        "property-no-unknown": null,
        'rule-empty-line-before': ['always', {
            except: [
                'after-rule',
                'after-single-line-comment',
                'inside-block-and-after-rule'
            ],
            ignore: ['first-nested']
        }]
    }
};
