const _T = (str) => str;

export const ResultList = ({ list = [] }) => {
	if (list.length === 0) {
		return (
			<div className="no-data" data-testid="no-data">
				<p>
					<b>{_T("No Result")}</b>
				</p>
				<p>
					<small>{_T("(Try something else)")}</small>
				</p>
			</div>
		);
	}
	return (
		<ul className="list-container" key="list" data-testid="list-container">
			{list.map((item) => (
				<ResultItem key={`item-${item.code}`} data={item} />
			))}
		</ul>
	);
};

const ResultItem = ({ data = {} }) => {
	return (
		<li className="result-item">
			<strong>{data.code}</strong>
			<span>{data.name}</span>
		</li>
	);
};
