class TestPlugin extends Plugin {
  async onload() {
    console.log('Test plugin loaded!');
    this.addRibbonIcon('star', 'Test Plugin', () => {
      alert('Test plugin clicked!');
    });
  }
  
  onunload() {
    console.log('Test plugin unloaded!');
  }
}

module.exports = TestPlugin;
