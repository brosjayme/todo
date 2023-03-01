import { Button, Stack } from "react-bootstrap";
import  Container  from "react-bootstrap/Container";
import BudgetCard from "./components/BudgetCard";

function App() {
  return(
   <Container className="my-4">
<Stack direction="horizontal" gap="2" className="mb-4">
  <h1 className="me-auto">Budgets</h1>
  <Button variant="primary">Add Budget</Button>
  <Button variant="outline-primary">Add Expense</Button>
  </Stack>

  <div
   style={{display:"grid", gridTemplateColumns: "repeat(auto-fill, mimnmax(300px,1fr))",
   gap:"rem", alignItems: "flex-start"}}>

<BudgetCard name ="Entertainment" amount = {100} max={2000}></BudgetCard>
  </div>
  </Container>
  )
}

export default App;
