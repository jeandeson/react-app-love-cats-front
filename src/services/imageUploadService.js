import axios from "axios";

export default class ImageUploadService {
  async handleImageUpload(image) {
    const data = new FormData();
    const config = {
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
        Authorization: "Client-ID 3052282645ce5e9",
      },
    };
    data.append("image", image);
    const result = await this.SendImage(data, config);
    return result;
  }

  async SendImage(formdata, config) {
    if (formdata) {
      const data = await axios.post("https://api.imgur.com/3/image", formdata, config).then((Response) => {
        return Response.data.data.link;
      });
      return data;
    }
  }
}
