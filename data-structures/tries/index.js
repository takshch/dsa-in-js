function TrieNode(character, isWordCompleted, children) {
  this.character = character;
  this.isWordCompleted = isWordCompleted;
  this.children = children;
}

function Trie() {
  (() => {
    const temp = new TrieNode('root');
    this.root = temp;
  })();

  this.insert = (str) => {
    if(str.length <= 0) return;

    let currentCharacterIndex = 0;
    let currentNode = this.root;

    let continueTraverse = true;
    while(continueTraverse) {
      if(currentCharacterIndex > str.length - 1) {
        continueTraverse = false;
        break;
      }

      const children = currentNode.children;
      const character = str[currentCharacterIndex];

      if(children) {
        let foundCharacter = false;
        for(let currentIndex = 0; currentIndex < children.length; currentIndex++) {
          if(character === children[currentIndex].character) {
            currentNode = children[currentIndex];
            foundCharacter = true;
          }
        }

        if(!foundCharacter) {
          const tempNode = new TrieNode(character);
          currentNode.children.push(tempNode);
          currentNode = tempNode;
        }
      } else {
        const tempNode = new TrieNode(character);
        currentNode.children = [tempNode];
        currentNode = tempNode;
      }

      if(currentCharacterIndex === str.length - 1) {
        currentNode.isWordCompleted = true;
      }

      currentCharacterIndex++;
    }
  };

  this.print = () => {
    let currentNode = this.root;
    let continueTraverse = true;

    while(continueTraverse) {
      const children = currentNode.children;
      if(children) {
        for(let currentIndex = 0; currentIndex < children.length; currentIndex++) {
          process.stdout.write(`${children[currentIndex].character} `);
        }
        console.log('');
      } else {
        continueTraverse = false;
        break;
      }
    }
  };
}

const Trie1 = new Trie();
Trie1.insert('hello');
Trie1.print();
