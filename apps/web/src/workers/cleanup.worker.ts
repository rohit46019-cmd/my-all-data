import { FileModel } from "../models/File.js";
import "../config/db.js";

(async () => {
  const cutoff = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  const toDelete = await FileModel.find({ deletedAt: { $lte: cutoff } });
  for (const file of toDelete) {
    await FileModel.deleteOne({ _id: file._id });
  }
  console.log(`Cleanup complete: ${toDelete.length} files purged`);
  process.exit(0);
})();
