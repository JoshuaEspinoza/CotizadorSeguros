import { useRef, useMemo } from 'react';
import useCotizador from '../hooks/useCotizador';
import { MARCAS, PLANES } from '../constants';

const Resultado = () => {
	const { resultado, datos } = useCotizador();

	const { marca, plan, year } = datos;

	const nombreMarca = useMemo(() => MARCAS[marca - 1], [resultado]);
	const nombrePlan = useMemo(() => PLANES[plan - 1], [resultado]);
	const yearRef = useRef(year);

	if (resultado === 0) return null;
	return (
		<div className="bg-gray-100 text-center mt-5 p-5 shadow	">
			<h3 className="font-black text-3xl text-gray-600 ">Resumen</h3>
			<p className=" my-2 ">
				<span className="font-bold">Marca:</span>
				{' ' + nombreMarca.nombre}
			</p>
			<p className=" my-2 ">
				<span className="font-bold">Plan:</span>
				{' ' + nombrePlan.nombre}
			</p>
			<p className=" my-2 ">
				<span className="font-bold">Año:</span>
				{' ' + yearRef.current}
			</p>
			<p className=" my-2 text-2xl ">
				<span className="font-bold">Total Cotización:</span>
				{' ' + resultado}
			</p>
		</div>
	);
};

export default Resultado;
