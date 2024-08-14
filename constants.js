// Options the user could type in
const prompts = [
  ["how are you"],
    ["hi", "hey", "hello", "good morning", "good afternoon","whatsup"],
    ["date","when association","when association meeting?","date of the association meeting"],
    ["what are you doing", "what is going on", "what is up"],
    ["venue","venue","where is venue","where is venue?","where venue","where is the event","where is the event?","Where is the event"],
    ["who is ahod","who is ahod?","ahod","who is ahod for aids"],
    ["Who is hod","hod","who is hod?","who is hod for department of aids"],
    [
      "chief guest","who is the chief guest","can i know about cheif guest","chief guest","Chief guest"
    ],
    ["event name?","Event name","name of the event?","event","event"],
    ["time","time?","whats the time of the event","what is the time of the event","time","time?"],
    ["who is the chairman","chairman","chairman name", "chair man"],
    ["executive director","executive director name","who is executive director","ed","executive","director"],
    ["principal","who is the principal","principal name","principal name?","college of the principal"],
    ["bye", "good bye", "goodbye", "see you later"],
    ["what should i eat today"],
    ["bro"],
    ["what", "why", "how", "where", "when"],
    ["no","not sure","maybe","no thanks"],
    [""],
    ["haha","ha","lol","hehe","funny","joke"]
  ]
  
  // Possible responses, in corresponding order
  
  const replies = [
    ["iam fine"],
    ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
    [
      "16th august 2024"
    ],
    [
      "Nothing much",
      "About to go to sleep",
      "I don't know actually"
    ],
    ["1st Floor Conference Hall"],
    ["Mrs. V.Sankari & Ms. R.Dhaaraani"],
    ["Dr. Kiran Bala"],
    ["Mr. M.Bharath"],
    ["Intelligence Association Meeting"],
    ["The Event Starts At 10 AM"],
    ["Dr. K.Ramakrishnan"],
    ["Dr. S.Kuppuswamy"],
    ["Dr. D.Srinivasan"],
    ["Bye", "Goodbye", "See you later"],
    ["Sushi", "Pizza"],
    ["whatsup Bro!"],
    ["Great question"],
    ["That's ok","I understand","What do you want to talk about?"],
    ["Please say something :("],
    ["Haha!","Good one!"]
  ]
  
  // Random for any other user input
  
  const alternative = [
    
    "I don't understand ",
    "can you repeat your question please"
  ]
  
  // Whatever else you want :)
  
  const ed = ["Sir name is Dr. S.Kuppuswamy " , "Dr. S.Kuppuswamy" , "he is Dr. S.Kuppuswamy"];
  const princi = ["Sir name is Dr. D.Srinivasan" , "Dr. D.Srinivasan" , "he is Dr. D.Srinivasan"];
const time = ["time is 10.00 AM","The event starts at 10.00 AM" , " its 10.00 AM , Hoping to see you there"];