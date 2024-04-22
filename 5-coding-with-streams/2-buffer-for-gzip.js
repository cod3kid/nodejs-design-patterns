import { promises as fs } from "fs";
import { gzip } from "zlib";
import { promisify } from "util";
const gzipPromise = promisify(gzip);

const filename = process.argv[2];

async function main() {
  const data = await fs.readFile(filename);
  const gzippedData = await gzipPromise(data);
  await fs.writeFile(`${filename}.gz`, gzippedData);
  console.log("File successfully compressed");
}
main();

/*
If we choose a file that’s big enough (for instance, about 8 GB), we’ll most likely receive an error message saying that the file that we’re trying to read is bigger than the maximum allowed buffer size.

RangeError [ERR_FS_FILE_TOO_LARGE]: File size (8130792448) is greater than possible Buffer: 2147483647 bytes
*/
