import { openDB } from "idb";


const initDB = async () => {
  return openDB("VideoDB", 1, {
    upgrade(db) {
      db.createObjectStore("videos");
    },
  });
};


export const saveVideoToStorage = async (key, blob, quality) => {
  const db = await initDB();
  const storeKey = `${key}-${quality}`;
  await db.put("videos", blob, storeKey);
};


export const getVideoFromStorage = async (key, quality) => {
  const db = await initDB();
  const storeKey = `${key}-${quality}`;
  return db.get("videos", storeKey);
};
