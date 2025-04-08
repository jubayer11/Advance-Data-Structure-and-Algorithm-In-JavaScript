class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    // 🔹 Hash function (you'll improve it later if you want)
    _hash(key) {
        let total = 0;
        let PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96; // a = 1, b = 2, etc.
            total = (total * PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        const index = this._hash(key);

        if (!this.keyMap[index]) {
            this.keyMap[index] = []; // initialize bucket
        }

        // OPTIONAL: Check if key already exists → update instead of duplicate
        for (let i = 0; i < this.keyMap[index].length; i++) {
            if (this.keyMap[index][i][0] === key) {
                this.keyMap[index][i][1] = value; // update value
                return;
            }
        }

        // Otherwise push new key-value pair
        this.keyMap[index].push([key, value]);
    }


    // 🔍 get(key) — you implement
    get(key) {
        const index = this._hash(key);
        if(this.keyMap[index]){
            for(let i=0;i<this.keyMap[index].length;i++){
                if(this.keyMap[index][i][0]===key){
                    return this.keyMap[index][i][1];
                }
            }
        }else{
            return undefined;
        }
    }

    // Return all unique keys
    keys() {
        let items=[];
        for(let item of this.keyMap){
            if(item){
                for(let property of item){
                    items.push(property[0]);
                }

            }
        }
        return items;
    }

// Return all unique values
    values() {
        let items=[];
        for(let item of this.keyMap){
            if(item){
                for(let property of item){
                    items.push(property[1]);
                }

            }
        }
        return items;
    }




}
const ht = new HashTable();

// Set key-value pairs
ht.set("pink", "#ffc0cb");
ht.set("blue", "#0000ff");
ht.set("cyan", "#00ffff");
ht.set("red", "#ff0000");

// ✅ Try getting existing keys
console.log("pink:", ht.get("pink"));   // Should return "#ffc0cb"
console.log("blue:", ht.get("blue"));   // Should return "#0000ff"
console.log("cyan:", ht.get("cyan"));   // Should return "#00ffff"
console.log("red:", ht.get("red"));     // Should return "#ff0000"

// ❌ Try getting a non-existing key
console.log("green:", ht.get("green")); // Should return undefined

console.log("keys:", ht.keys());
console.log("values",ht.values());