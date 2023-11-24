import { Fragment } from 'react';

import ErrorMessage from './ErrorMesagge';
import { MARCAS, YEARS, PLANES } from '../constants/index';

import useCotizador from '../hooks/useCotizador';

const Formulario = () => {
	const { datos, error, setError, handleChangeDatos, cotizarSeguro } =
		useCotizador();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (Object.values(datos).includes('')) {
			setError('Todos los campos son obligatorios');
			return;
		}
		setError('');
		cotizarSeguro();
	};

	return (
		<>
			{error && <ErrorMessage></ErrorMessage>}
			<form onSubmit={handleSubmit}>
				<div className="my-5 ">
					<label className="block mb-3 font-bold text-gray-400 uppercase">
						Marca
					</label>
					<select
						name="marca"
						id=""
						className="w-full p-3 bg-white border border-gray-200 "
						onChange={(e) => handleChangeDatos(e)}
						value={datos.marca}
					>
						<option value="">Selecciona marca</option>
						{MARCAS.map((marca) => (
							<option
								key={crypto.randomUUID()}
								value={marca.id}
							>
								{marca.nombre}
							</option>
						))}
					</select>
				</div>
				<div className="my-5 ">
					<label className="block mb-3 font-bold text-gray-400 uppercase">
						Año
					</label>
					<select
						name="year"
						id=""
						className="w-full p-3 bg-white border border-gray-200 "
						onChange={(e) => handleChangeDatos(e)}
						value={datos.year}
					>
						<option value="">Selecciona el año</option>
						{YEARS.map((year) => (
							<option
								key={year}
								value={year}
							>
								{year}
							</option>
						))}
					</select>
				</div>
				<div className="my-5 ">
					<label className="block mb-3 font-bold text-gray-400 uppercase">
						Elige un plan
					</label>
					<div className="flex gap-3 items-center">
						{PLANES.map((plan) => (
							<Fragment key={plan.id}>
								<label>{plan.nombre}</label>
								<input
									type="radio"
									name="plan"
									value={plan.id}
									onChange={(e) => handleChangeDatos(e)}
								/>
							</Fragment>
						))}{' '}
					</div>
				</div>

				<button
					className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white
				cursor-pointer p-3 font-bold uppercase"
				>
					Cotizar
				</button>
			</form>
		</>
	);
};

export default Formulario;