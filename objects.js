const checkValues = (obj, value) => {
    for (const key in obj){
        if (value === obj[key]){
            return true
        }
    }
    return false
  };


  //
  const courseInfo = {
    name: "Code 301",
    duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
    topics: [
      "SMACSS",
      "APIs",
      "NodeJS",
      "SQL",
      "jQuery",
      "functional programming",
    ],
    finalExam: true,
  };
  
  const getCourseKeys = (obj) => {
    // Solution code here...
  };
  