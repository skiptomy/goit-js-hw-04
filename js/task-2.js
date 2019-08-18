"use strict";

const inventory = {
  items: ["Монорельса", "Фильтр"],
  add(itemName) {
    this.items.push(itemName);
  },
  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName);
  }
};

const invokeInventoryOperation = function(itemName, inventoryAction) {
  console.log(`Invoking ${inventoryAction.name} opeartion on ${itemName}`);
  inventoryAction.call(inventory, itemName);
};

invokeInventoryOperation.call(inventory, "Аптечка", inventory.add);
// Invoking add opeartion on Аптечка

console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

invokeInventoryOperation.call(inventory, "Фильтр", inventory.remove);
// Invoking remove opeartion on Фильтр

console.log(inventory.items); // ['Монорельса', 'Аптечка']
