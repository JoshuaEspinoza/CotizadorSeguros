import useCotizador from '../hooks/useCotizador';

const ErrorMesagge = () => {
	const { error } = useCotizador();
	return (
		<h3 className="text-center font-bold border-red-400 bg-red-100 py-3 text-red-700">
			{error}
		</h3>
	);
};

export default ErrorMesagge;
