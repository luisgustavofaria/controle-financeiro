import { Header } from "../src/components/header/Header";
import { Summary } from "../src/components/summary/Summary";
import { Transactions } from "../src/components/transactions/Transactions";

export default function HomePage(){
	return (
		<div>
			<Header/>
			<Summary/>
      <Transactions/>
		</div>
    )
}