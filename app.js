const arr = [
  {
    tm_number: "9724084103",
    tm_name: "PRADIP BHAI",
    zsm_number: "9974252013",
    zsm_name: "Jay Ambe1 Communicati",
    zbm_number: "1234567890",
    zbm_name: "ARIF MALEK",
    "ceo/sales_head/marketing_head_number": "9898049452",
    zone_name: "Surat",
    circle_name: "Gujarat",
    category: "Challenger"
  },
  {
    tm_number: "9724084103",
    tm_name: "PRADIP duplicate",
    zsm_number: "9974252013",
    zsm_name: "Jay Ambe1 Communicati",
    zbm_number: "1234567890",
    zbm_name: "ARIF MALEK",
    "ceo/sales_head/marketing_head_number": "9898049452",
    zone_name: "Surat",
    circle_name: "Gujarat",
    category: "Challenger"
  },
  {
    tm_number: "9724084105",
    tm_name: "PRADIP BHAI",
    zsm_number: "9974252013",
    zsm_name: "Jay Ambe Communicati",
    zbm_number: "1234567890",
    zbm_name: "ARIF MALEK",
    "ceo/sales_head/marketing_head_number": "9898049452",
    zone_name: "Surat",
    circle_name: "Gujarat",
    category: "Challenger"
  },
  {
    tm_number: "972484103",
    tm_name: "SK BHAI",
    zsm_number: "9974252013",
    zsm_name: "Jay Ambe 2 Communicati",
    zbm_number: "1234567890",
    zbm_name: "ARIF MALEK",
    "ceo/sales_head/marketing_head_number": "9898049452",
    zone_name: "Surat",
    circle_name: "Gujarat",
    category: "Challenger"
  },
  {
    tm_number: "972484103",
    tm_name: "SK BHAI",
    zsm_number: "9974252013",
    zsm_name: "Jay Ambe 3 Communicati",
    zbm_number: "1234567890",
    zbm_name: "ARIF MALEK",
    "ceo/sales_head/marketing_head_number": "9898049452",
    zone_name: "Surat",
    circle_name: "Gujarat",
    category: "Challenger"
  }
];

function filterData(key) {
  const newArr = [];

  arr.forEach((obj) => {
    const objToPush = {};
    const arryToPush = [];
    let valueExist = false

    newArr.forEach((value, i) => {
      if(value[obj[key]]){
      valueExist = true
      }
    });

    if(!valueExist)
    {
    arr.filter((item) => {
      if (obj[key] === item[key]) {
        const newItem = {...item}
        delete newItem[key]
        arryToPush.push(newItem);
      }
      return null;
    });
    objToPush[obj[key]] = arryToPush;
    newArr.push(objToPush);
      }
  });

  console.log(newArr);
}

filterData('tm_number');
