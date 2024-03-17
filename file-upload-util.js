import axios from "axios";
import fs from "fs";

export const handleFileUpload = async (file) => {
  const fileStream = fs.createReadStream(file.path);
  const uniqueFilename = `${Date.now()}-${file.filename}-${file.originalname}`;

  let yourStorageZone;
  const response = await axios.put(
    //url
    //stream
    //headers
    `https://storage.bunnycdn.com/${yourStorageZone}/${uniqueFilename}`,
    fileStream,
    {
      headers: {
        AccessKey: "xxxx-xxx-xxxxx-xxxx",
      },
    }
  );

  if (response.data) {
    return `https://bunny-storage-node.b-cdn.net/${uniqueFilename}`;
  } else {
    return false;
  }
};
