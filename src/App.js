import { Button, Stack } from "react-bootstrap";
import  Container  from "react-bootstrap/Container";
import AddBudgetModal from "./components/AddBudgetModal";
import BudgetCard from "./components/BudgetCard";
import { useState } from "react";


function App() {
  const[showAddBudgetModal, setShowAddBudgetModal]  = useState(false)
  return(
    <>
   <Container className="my-4">
<Stack direction="horizontal" gap="2" className="mb-4">
  <h1 className="me-auto">Budgets</h1>
  <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button>
  <Button variant="outline-primary">Add Expense</Button>
  </Stack>

  <div
   style={{display:"grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))",
   gap:"rem", alignItems: "flex-start"}}>

<BudgetCard name ="Entertainment" gray amount = {2900} max={2000}></BudgetCard>
  </div>
  </Container>
  <AddBudgetModal show ={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false) }/>
  </>
  )
}

export default App;
