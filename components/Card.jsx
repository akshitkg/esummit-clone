export default function Card(props) {
  const dataProps = props.props;
  return (
    <div>
      <ul>
        {dataProps.map((dataElement)=>{
          return <li key={dataElement.id}>{dataElement.event_name}</li>
        })}
      </ul>
    </div>
  )
}