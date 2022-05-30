import { Route, Routes } from 'react-router-dom';
import BaseAdmin from './modules/layouts/BaseAdmin';
import Navbar from './modules/layouts/Navbar';
import Applicants from './pages/applicants/Applicants';
import Blog from './pages/Blog';
import Classes from './pages/Classes';
import Contacts from './pages/Contacts';
import RequestedDocs from './pages/docs/RequestedDocs';
import Events from './pages/Events';
import IndexPage from './pages/IndexPage';
import PagesSettings from './pages/pages/PagesSettings';
import PassesList from './pages/passes/PassesList';
import PassesPurchases from './pages/passes/PassesPurchases';
import PassesSales from './pages/passes/PassesSales';
import PasswordManager from './pages/password-manager/PasswordManager';
import ReservationsDeleted from './pages/reservations/ReservationsDeleted';
import ReservationsPurchases from './pages/reservations/ReservationsPurchases';
import ReservationsTransactions from './pages/reservations/ReservationsTransactions';
import Rules from './pages/Rules';
import Users from './pages/users/Users';
import AuthHandler from './modules/AuthHandler';
import Login from './pages/auth/Login';
import { useState } from 'react';

function App() {
	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<>
			<AuthHandler loggedIn={loggedIn}>
				<Navbar />
				<Routes>
					<Route path="/" element={<BaseAdmin />}>
						<Route path="reservations">
							<Route path="deleted" element={<ReservationsDeleted />} />
							<Route path="purchases" element={<ReservationsPurchases />} />
							<Route
								path="transactions"
								element={<ReservationsTransactions />}
							/>
						</Route>
						<Route path="passes">
							<Route path="list" element={<PassesList />} />
							<Route path="sales" element={<PassesSales />} />
							<Route path="purchases" element={<PassesPurchases />} />
						</Route>
						<Route
							path="/login"
							element={<Login signIn={() => setLoggedIn(true)} />}
						/>
						<Route path="/classes" element={<Classes />} />
						<Route path="/events" element={<Events />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/pages" element={<PagesSettings />} />
						<Route path="/contacts" element={<Contacts />} />
						<Route path="/rules" element={<Rules />} />

						<Route path="/users" element={<Users />} />

						<Route path="/requested-docs" element={<RequestedDocs />} />
						<Route path="/applicants" element={<Applicants />} />
						<Route path="/password-manager" element={<PasswordManager />} />
						<Route path="/" element={<IndexPage />} />
					</Route>
				</Routes>
			</AuthHandler>
		</>
	);
}

export default App;
