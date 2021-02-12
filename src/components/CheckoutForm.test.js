import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";
import { act } from 'react-dom/test-utils';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //arrange
    render(<CheckoutForm />);

    //act
    const header = screen.getByText(/checkout form/i);

    //assert
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    //arrange
    render(<CheckoutForm />);

    //act
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    const button = screen.getByRole('button', { name: /checkout/i });

    userEvent.type(firstNameInput, "firstname");
    userEvent.type(lastNameInput, "lastname");
    userEvent.type(addressInput, "address");
    userEvent.type(cityInput, "city");
    userEvent.type(stateInput, "state");
    userEvent.type(zipInput, "zip");
    userEvent.click(button);

    const reply = screen.getByTestId('successMessage');

    //assert
    // expect(reply).not.toBeInTheDocument(); // failure test
    expect(reply).toBeInTheDocument();
});
