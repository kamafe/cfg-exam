// QUESTION 1:

// 1. Can you provide a brief summary of what is happening in this function code?

// We have a function called 'countReducer' that manages the state of the counter. 
// An initial state starts it and then takes 'action ' as an input. 
// Then when the action type is 'increment', it returns a new state with the value increased by 1. 
// If the action type is anything else, it simply returns the current state unchanged.


// 2. Add one function that tells the reducer to reduce the state value by 1

function countReducer(state = initialState, action) {
  if (action.type === 'increment') {
    return {
      value: state.value + 1
    }
  } else if (action.type === 'decrement') {
    return {
      value: state.value - 1
    }
  }
  return state
}

// 3. Add one action that tells the reducer to reset the state

function countReducer(state = initialState, action) {
  if (action.type === 'increment') {
    return {
      value: state.value + 1
    }
  } else if (action.type === 'decrement') {
    return {
      value: state.value - 1
    }
  } else if (action.type === 'reset') {
    return initialState;
  }
  return state;
}


// QUESTION 2:

// 1. Can you provide a brief summary on what is happening on line 34-39?

// The 'useState(0)' is there to initialise a state variable studentCount with a default value of 0 and provide a function setStudentCount to update it.
// Then we have a return, inside of which there is the current number of students in the classroom.
// Below that there is a button to add a student, but we didnt  define the onClick yet.

// 2. When a user clicks on the “Add student” button, update the state (studentsCount) to include only the total number of students who are present.
//a. Write a pseudocode of how your function would look.

// We start with initializing state variable 'studentCount' to 0.
// Then we have to define an array 'students' with two properties (name and present).
// We create a function 'updateStudentCount' to filter the students array who only have the 'present' property as true.
// and we update 'studentCount' with the length of that array.
// Finally we can set the onClick of the button to 'updatedStudentCOunt'

//b. How do you ensure that the function is triggered when the button is clicked?

//We have to set the onClick handler of the button to the function that updates the state.

//c. How will you update the state with the result of your function?

// We can use the setStudentCount function to update the state.

// full function to answer a-c questions:

const classInfo = () => {
  let [studentCount, setStudentCount] = useState(0);

  const students = [
    { name: "Nrupul", present: false },
    { name: "Prateek", present: true },
    { name: "Jane", present: true },
    { name: "Paul", present: false },
    { name: "Luke", present: true }
  ];

  const updatedStudentCount = () => {
    const presentStudents = students.filter(student => student.present);
    setStudentCount(presentStudents.length);
  };

  return (
    <div>
      <p>Number of students in classroom: {studentCount}</p>
      <button onClick={updatedStudentCount}>Add Student</button>
    </div>
  );
}

export default classInfo;



// QUESTION 3:

//1. A change of code was made on line 174 (figure 4), can you briefly explain what that would do?

// The change updates the state's value by adding action.payload to state.value.
// It means when the increment action is dispatched, it includes a payload that specifies the amount by which to increment the value.

//2. Let’s say we don’t want to set the state locally anymore and want to use dispatch.
// How would you ensure that an “increment” action that also contains the result of the studentCount is dispatched on button click? According to your answer in part 2.2b what would need to be changed?

// We have to ensure the increment action is dispatched with the result of studentCount on button click. The we update the button click.

const initialState = { value: 0 };

function countReducer(state = initialState, action) {
  if (action.type === 'increment') {
    return {
      value: state.value + action.payload
    }
  }
  return state;
}

//3. Which code do you think is best suited to ensure that the “increment” action updates the state with the correct total number of students who are present.

// Code with the 'state.value + action.payload' is better because it will maintain accurate count when the button is clicked nultiple times.
// it adds a new count and doesnt just replace it like with the other piece of code.



