import React from 'react';
import styles from './app.module.css';
import { ingredients } from '@utils/ingredients.ts';
import { BurgerIngredients } from '@components/burger-ingredients/burger-ingredients.tsx';
import { BurgerConstructor } from '@components/burger-contructor/burger-constructor.tsx';
import { AppHeader } from '@components/app-header/app-header.tsx';
import { Route, Routes, useParams } from "react-router-dom";

const Test = () => {
	const { id } = useParams();

	return (
		<h1>{id}</h1>
	)
};

export const App = (): React.JSX.Element => {
	return (
		<div className={styles.app}>
			<AppHeader />
			<Routes>
				<Route
					path='/'
					element={
						<>
							<h1
								className={`${styles.title} text text_type_main-large mt-10 mb-5 pl-5`}>
								Соберите бургер
							</h1>
							<main className={`${styles.main} pl-5 pr-5`}>
								<BurgerIngredients ingredients={ingredients} />
								<BurgerConstructor ingredients={ingredients} />
							</main>
						</>
					}
				/>
				<Route path='/test/:id' element={<Test />} />
			</Routes>
		</div>
	);
};

export default App;
