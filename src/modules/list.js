import save from './save.js';
import refresh from './refresh.js';
import load from './load.js';
import display from './display.js';
import add from './add.js';

class Scorelist {
  constructor() {
    this.lists = load();
  }

  save() {
    save(this.lists);
  }

  add(name, score) {
    add(this.lists, name, score);
    this.save();
    this.display();
  }

  refresh() {
    refresh(this.lists);
    this.save();
    this.display();
  }

  display() {
    display(this.lists);
  }
}

export default Scorelist;