import './TodoCounter.css'


function TodoCounter({done, total}) {
  return (
   <h1 className="TodoCounter">
      Has completado <span>{done}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export {TodoCounter};