import AV from './avInit';

export async function update() {
  let query = new AV.Query('Test');
  const res = await query.find().then(res => {
    return res.map(obj => {
      const result = {
        ...obj.attributes,
        id: obj.id,
      };
      // console.log(result);
      return result;
    });
  });
  console.log({ res });
}
