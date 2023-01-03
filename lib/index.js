module.exports = {
    configs: {
        recommended: {
            rules: {
                // 缩进风格
                "indent": ["error", 2, {"VariableDeclarator": "first"}],
                // 必须使用全等
                "eqeqeq": ["error", "always"],
                // 禁止使用eval
                "no-eval": "error",
                // 禁止不必要的嵌套块
                "no-lone-blocks": "error",
                // 禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
                "no-loop-func": "error",
                // 不能用多余的空格
                "no-multi-spaces": ["error", {"exceptions": {"Property": false}}],
                // 不能比较自身
                "no-self-compare": "error",
                // 禁止使用逗号运算符
                "no-sequences": "error",
                // parseInt必须指定第二个参数
                "radix": "error",
                // 不能使用undefined
                "no-undefined": "error",
                // 未定义前不能使用
                "no-use-before-define": "error",
                // 大括号风格
                "brace-style": "error",
                // 强制驼峰法命名
                "camelcase": ["error", {"properties": "always"}],
                // 对象字面量项尾不能有逗号
                "comma-dangle": ["error", "never"],
                // 文件以单一的换行符结束
                "eol-last": ["error", "always"],
                // 方法调用中间是否可以空格
                "func-call-spacing": ["error", "never"],
                // 对象字面量中冒号的前后空格
                "key-spacing": ["error", {"beforeColon": false}],
                // 换行风格
                "linebreak-style": ["error", "unix"],
                // 引号类型
                "quotes": ["error", "double"],
                // 语句强制分号结尾
                "semi": ["error", "always"],
                // 函数定义时括号前面要不要有空格
                "space-before-function-paren": ["error", "never"],
                // 中缀操作符周围要不要有空格
                "space-infix-ops": "error",
                // 箭头函数前/后括号
                "arrow-spacing": ["error", {"before": true, "after": true}],
                "no-useless-return": "error",
                "require-await": "error",
                "block-spacing": "error",
                "jsx-quotes": ["error", "prefer-double"],
                "keyword-spacing": ["error", {"before": true, "after": true}],
                "new-cap": ["error", {"capIsNew": false}],
                "no-duplicate-imports": ["error", {"includeExports": true}],
                "prefer-const": "error",
                "prefer-destructuring": ["error", {"object": true, "array": false}],
                "object-curly-spacing": ["error", "always"],
                "comma-spacing": ["error", {"before": false, "after": true}]
            }
        }
    }
}
