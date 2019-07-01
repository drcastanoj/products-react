import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { ClientsPage } from './clients';


function renderClientsPage() {
    return render(<ClientsPage />);
}

/**
 * Working  with @testing-library/react
 */
describe('CoursesPage', () => {
    afterEach(cleanup);

    it(' Should get Clients text ', () => {
        const { getByText } = renderClientsPage();
        getByText('Clients');
    });

})
