module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'prettier',
    ],

    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    globals: {
        defineProps: true,
    },

    // 0是不校验，1是警告，2是报错
    rules: {
        // 可修复的规则
        semi: [2, 'always'], // 每句后加分号
        curly: 2, // 确保将块语句包装在花括号中，例如 if 等判断语句
        strict: [2, 'function'], // 函数体内都是严格的模式代码，而全局代码不是
        quotes: [2, 'single'], // 尽可能用单引号
        indent: [2, 4, { SwitchCase: 1 }], // 缩进4个空格,默认case是和switch对齐，这里强制缩进
        'dot-location': [2, 'property'], // 表达式中的点应与属性部分位于同一行，例如 .then 在同一行
        'block-spacing': [2, 'never'], // 函数如果是单行代码，花括号内不加空格
        'eol-last': [2, 'always'], // 非空文件的末尾至少执行一个换行符
        'no-multi-spaces': 2, // 连续多个不用于缩进的空格通常是错误
        'no-trailing-spaces': 2, // 不允许在行尾添加尾随空白
        'no-multiple-empty-lines': [
            2,
            {
                max: 1, // 连续最大空行是1
                maxBOF: 0, // 文件开头强制执行最大数量的连续空行
                maxEOF: 0, // 文件结尾处强制执行最大数量的连续空行
            },
        ],
        'space-before-blocks': 2, // 花括号前要有空格，箭头函数由arrow-spacing规则处理，关键字和块之间由keyword-spacing规则处理
        'arrow-spacing': 2, // 箭头函数箭头左右要有空格
        'keyword-spacing': 2, // 关键字左右的空格
        'no-tabs': 2, // 禁用制表符 /t
        'semi-spacing': 2, // 分号与之后的代码必须有间隔
        'no-lonely-if': 2, // 不允许将 if 语句作为 else 块中的唯一语句，应当使用else-if
        'spaced-comment': [2, 'always'], // 注释后面至少要有一个空格
        'lines-around-comment': [
            2,
            {
                beforeBlockComment: true,
                beforeLineComment: true,
                allowBlockStart: true,
                allowObjectStart: true,
                allowArrayStart: true,
            },
        ], // 行注释前需要空行
        'func-call-spacing': 2, // 禁止函数名称和括号之间的空格
        'space-before-function-paren': [2, { named: 'never' }], // 具名函数小括号和 function 之间不要空格
        'space-infix-ops': 2, // 连续的操作符需要用空格隔开
        'brace-style': 2, // 括号样式比如 else 放在 if 结束括号同行，还有 try, catch 等
        'comma-style': [2, 'last'], // 逗号在行尾
        'comma-dangle': [
            2, // 多行代码添加尾随逗号
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'never',
            },
        ],

        // 必须手动修复的规则
        eqeqeq: 2, // 使用 === 而不是 ==
        camelcase: 2, // 变量名是否是驼峰式
        'no-console': 0,
        'new-cap': [2, { capIsNew: false }], // 构造函数名以大写字母开头
        'max-len': [
            2,
            {
                code: 120, // 每行最长120字符
                ignoreComments: true, // 忽略注释和尾随注释
                ignoreStrings: true, // 忽略字符串
                ignoreTemplateLiterals: true, // 忽略包含模板文字的行
                ignoreRegExpLiterals: true, // 忽略包含正则的行
            },
        ],
        'max-lines': [
            2,
            {
                max: 1000, // 单个文件不超过1000行代码
                skipBlankLines: true, // 忽略空行
                skipComments: true, // 忽略注释
            },
        ],
        'no-param-reassign': 2, // 函数入参不要修改,但默认可以更改对象的属性
        'max-params': [2, 5], // 入参数量最多 5 个
        'no-eval': 2, // 禁止用 eval
        'no-with': 2, // 禁止用 with
        'block-scoped-var': 2, // 变量不能在定义块的外部使用
        'no-new-wrappers': 2, // 禁止 new String，new Number或new Boolean
        'guard-for-in': 2, // for in循环要用 if 语句过滤结果
        'no-prototype-builtins': 2, // 不允许对象调用Obeject的方法，应当使用Object.hasOwnProperty.call(a, key)的方式
        'no-unexpected-multiline': 2, // 不允许混淆多行表达式，换行符看起来像是结束语句，但不是
        'no-fallthrough': 2, // switch每个case都要加 break
        'no-undef': 2, // 不能引用未声明的变量
        'no-inner-declarations': 2, // 函数内部不允许使用函数表达式声明函数，应当赋值给变量
        'no-extend-native': 2, // 不允许直接修改内建对象的原型
        'no-loop-func': 2, // 检测可能无法正常工作的代码，比如闭包时函数循环引用
        'no-unused-vars': [2, { args: 'after-used' }], // 消除未使用的变量，函数和参数
        'max-depth': [2, 4], // 嵌套块的最大深度 4

        // eslint- plugin - vue规则
        'vue/max-attributes-per-line': 0,
        'vue/first-attribute-linebreak': 0,
    },
};
