const random_jokes = [
    {
      setup: 'What is the object oriented way to get wealthy ?',
        punchline: 'mock   Inheritance11111',
    },
    {
      setup: 'To understand what recursion is...',
      punchline: "mock:::You must first understand what recursion is11111",
    },
    {
      setup: 'What do you call a factory that sells passable products?',
      punchline: 'mock:::A satisfactory1111',
    },
  ];
  
  let random_joke_call_count = 0;
  
  export default {
    'get /dev/random_joke': function (req, res) {
/*
        失败模拟：
        res.status(500);
        res.json({});

 */       
      const responseObj = random_jokes[random_joke_call_count % random_jokes.length];
      random_joke_call_count += 1;
      setTimeout(() => {
        res.json(responseObj);
      }, 3000);
    },
  };