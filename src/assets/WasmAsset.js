const Asset = require('../Asset');

class WasmAsset extends Asset {
  constructor(name, pkg, options) {
    super(name, pkg, options);
    this.type = 'wasm';
    this.encoding = null;
  }

  async collectDependencies() {
    const imports = WebAssembly.Module.imports(this.ast);
    for (let i = 0; i < imports.length; i++) {
      this.addDependency(imports[i].module, {});
    }
  }

  async parse(contents) {
    return await WebAssembly.compile(contents);
  }

  async generate() {
    return {
      // js: 'fetch("add.wasm"); exports.add_one = function() { return 3; }',
    };
  }
}

module.exports = WasmAsset;
