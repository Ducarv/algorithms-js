class HashTable {
    constructor() {
        this.table = new Array(127);
        this.size = 0;
    }

    _hash(key) {
        let hash = 0;

        for(let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }

        return hash % this.table.length;
    }

   set(key, value) {
    const index = this._hash(key);

    if(this.table[index]) {
        for(let i = 0; i < this.table[index].length; i++) {
            if(this.table[index][i][0] === key) {
                this.table[index][i][1] = value;
                return;
            }
        }

        this.table[index].push([key, value]);
    } else {
        this.table[index] = [];
        this.table[index].push([key, value]);
    }

    this.size++;
   }

    get(key) {
        const index = this._hash(key);

        if(this.table[index]) {
            for(let i = 0; i < this.table.length; i++) {
                if(this.table[index][i][0] === key) {
                    return this.table[index][i][1];
                }
            }
        }

        return undefined;
    }

    remove(key) {
        const index = this._hash(key);

        if(this.table[index] && this.table[index].length) {
            for(let i = 0; i < this.table[index].length; i++) {
                if(this.table[index][i][0] === key) {
                    this.table[index].splice(i, 1);
                    this.size--;
                    return true;
                }
            }
        } else {
            return false;
        }
    }

    display() {
        this.table.forEach((values, index) => {
            const chainedValues = values.map(
                ([key, value]) => `[ ${key}: ${value} ]`
            );

            console.log(` ${index}: ${chainedValues} `);
        });
    }
}

const ht = new HashTable();

ht.set("apple", "red");
ht.set("apricot", "orange");
ht.set("banana", "yellow");
ht.set("cherry", "red");

ht.set("grape", "purple");
ht.set("lemon", "yellow");
ht.set("strawberry", "red");

ht.display(); /*
                18: [ cherry: red ] 
                19: [ grape: purple ] 
                22: [ apple: red ] 
                31: [ lemon: yellow ] 
                93: [ strawberry: red ] 
                101: [ banana: yellow ] 
                119: [ apricot: orange ]
              */