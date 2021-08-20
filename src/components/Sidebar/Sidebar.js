import React, { useContext } from "react";
import { ItemSelectedContext } from "../../context";
import logo from "../../assets/logo 320x320.png";

const options = {
	weekday: "long",
	year: "numeric",
	month: "long",
	day: "numeric",
};

export const Sidebar = ({ data }) => {
	const { setIdItem } = useContext(ItemSelectedContext);

	console.log(data);

	return (
		<div style={styles.sidebar}>
			<div style={styles.titleContainer}>
				<img
					// className='img-thumbnail'
					style={styles.logo}
					width='100'
					src={logo}
				/>
				{/* <h1 style={styles.title}>Aura Potholes</h1> */}
			</div>

			<div style={styles.grid}>
				{data.map(el => {
					const date = el.date.toLocaleDateString("es-MX", options);

					return (
						<div
							key={el.lat}
							onClick={() => {
								setIdItem(el.id);
							}}
							className='sidebar-item'
							style={styles.item}
						>
							<img
								style={styles.img}
								src={require(`../../assets/${el.id}.png`).default}
								width='50'
								height='50'
							/>
							<div>
								<p style={styles.date}>
									{date.charAt(0).toUpperCase() + date.slice(1)}
								</p>
								<p style={styles.address}>{el.address}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

const styles = {
	title: {
		textAlign: "center",
		color: "white",
		fontFamily: "Poppins !important",
	},
	sidebar: {},
	grid: {
		padding: "10px",
	},
	item: {
		height: "100px",
		border: "1px solid rgba(0, 0, 0, .1)",
		cursor: "pointer",
		display: "flex",
		alignItems: "center",
		padding: "10px",
		margin: "10px 0",
	},
	titleContainer: {
		padding: "20px 0",
		display: "flex",
		borderTop: "10px solid",
	},
	logo: {
		margin: "0px auto",
	},
	img: {
		borderRadius: "50%",
		marginRight: "20px",
	},
	date: {
		lineHeight: "0px",
		marginTop: "18px",
		fontWeight: "bold",
		color: "dimgrey",
	},
	address: {
		lineHeight: "15px",
		fontSize: "11px",
	},
};
