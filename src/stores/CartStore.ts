import type { CartItem, Uid } from "@/types";
import { defineStore, acceptHMRUpdate } from "pinia";
//import items from "@/data/cart.json";
export const useCartStore = defineStore("CartStore", {
  state: () => {
    return {
      items: [] as CartItem[],
    };
  },
  actions: {
    addItem(itemId: Uid, count: number) {
      const item = this.items.find((item) => item.id === itemId);
      if (item) {
        console.log('hello count')
        item.count += count;
      } else {
        this.items.push({ id: itemId, count });
      }
      return count;
    },
  }
});

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
// }
