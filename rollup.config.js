import babel from 'rollup-plugin-babel'
// 注意，这里引入需要使用 { uglify } 而非 uglify，因为 uglify 导出自身时使用的是 exports.uglify
import { uglify } from 'rollup-plugin-uglify'

export default {
  // 入口文件
  input: 'src/main.js',
  output: {
    // 打包名称
    name: 'bundlea',
    // 打包的文件
    file: 'dist/bundle.js',
    // 打包的格式，umd 支持 commonjs/amd/life 三种方式
    format: 'umd'
  },
  plugins: [
    // 引入 babel 插件
    babel({
      exclude: 'node_modules/**'
    }),
    // js 压缩插件，需要在最后引入
    uglify()
  ]
}
