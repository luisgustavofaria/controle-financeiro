import { Header } from "../src/components/header/Header";
import { Summary } from "../src/components/summary/Summary";
import { Table } from "../src/components/table/Table";

export default function HomePage(){
	return (
		<div>
			<Header/>
			<Summary/>
      <Table/>
		</div>
    )
}