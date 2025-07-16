import type { FC } from "react";
import './Table.css'

//Import data andet sted fra. Først anden fil, så en slags backend. mongodb? sql? andet smart trend?

interface RowData {
  id: number
  name: string
  type: string
  status: string
}

const data: RowData[] = [
  { id: 1, name: 'Windmill A', type: 'Wind', status: 'Active' },
  { id: 2, name: 'Solar Panel B', type: 'Solar', status: 'Inactive' },
  { id: 3, name: 'Hydro Station C', type: 'Water', status: 'Active' },
]

const Table: FC = () => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.type}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table