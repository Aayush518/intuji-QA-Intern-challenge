# Test Cases for Student Registration Form (demoqa.com/automation-practice-form)

## Overview
This readme file outlines test scenarios and test cases for the Student Registration Form, including positive cases, negative cases, edge cases, and UI validations.

## Test Scenarios

### 1. Form Field Validation
### 2. Form Submission 
### 3. UI/UX Testing
### 4. Browser Compatibility
### 5. Responsiveness Testing

## Detailed Test Cases

### 1. Form Field Validation

#### 1.1 Name Field Tests

| Test ID | Test Description | Test Steps | Expected Result | Test Type |
|---------|-----------------|------------|-----------------|-----------|
| TC-001 | Verify First Name field accepts valid input | 1. Navigate to the form<br>2. Enter valid first name (e.g., "John") | First name is accepted without errors | Positive |
| TC-002 | Verify Last Name field accepts valid input | 1. Navigate to the form<br>2. Enter valid last name (e.g., "Smith") | Last name is accepted without errors | Positive |
| TC-003 | Verify First Name field validation for empty input | 1. Navigate to the form<br>2. Leave First Name field empty<br>3. Try to submit the form | Error message should be displayed indicating first name is required | Negative |
| TC-004 | Verify Last Name field validation for empty input | 1. Navigate to the form<br>2. Leave Last Name field empty<br>3. Try to submit the form | Error message should be displayed indicating last name is required | Negative |
| TC-005 | Verify Name fields with special characters | 1. Enter name with special characters (e.g., "O'Brien" or "Smith-Johnson") | Special characters within names should be accepted | Edge case |

#### 1.2 Email Field Tests

| Test ID | Test Description | Test Steps | Expected Result | Test Type |
|---------|-----------------|------------|-----------------|-----------|
| TC-006 | Verify Email field accepts valid email format | 1. Enter valid email (e.g., "test@example.com") | Email is accepted without errors | Positive |
| TC-007 | Verify Email field validation for invalid format | 1. Enter invalid email (e.g., "testexample.com", "test@", "@example.com") | Error message should indicate invalid email format | Negative |
| TC-008 | Verify Email field with long domain | 1. Enter email with long domain (e.g., "test@verylongdomainnameexample.com") | Email should be accepted | Edge case |
| TC-009 | Verify Email field with special characters | 1. Enter email with special characters (e.g., "test.name+tag@example.com") | Email should be accepted | Edge case |

#### 1.3 Gender Selection Tests

| Test ID | Test Description | Test Steps | Expected Result | Test Type |
|---------|-----------------|------------|-----------------|-----------|
| TC-010 | Verify Gender radio button selection | 1. Select "Male" radio button<br>2. Select "Female" radio button<br>3. Select "Other" radio button | Only one gender option should be selectable at a time | Positive |
| TC-011 | Verify Gender field validation for no selection | 1. Leave gender unselected<br>2. Try to submit the form | Error message should indicate gender selection is required | Negative |

#### 1.4 Mobile Number Tests

| Test ID | Test Description | Test Steps | Expected Result | Test Type |
|---------|-----------------|------------|-----------------|-----------|
| TC-012 | Verify Mobile field accepts valid 10-digit number | 1. Enter valid 10-digit number (e.g., "1234567890") | Mobile number is accepted without errors | Positive |
| TC-013 | Verify Mobile field validation for non-numeric input | 1. Enter alphabets or special characters | Error message should indicate only numbers are allowed | Negative |
| TC-014 | Verify Mobile field validation for insufficient digits | 1. Enter less than required digits | Error message should indicate the required length | Negative |
| TC-015 | Verify Mobile field with leading zeros | 1. Enter number with leading zeros (e.g., "0123456789") | Should be handled appropriately | Edge case |

#### 1.5 Date of Birth Tests

| Test ID | Test Description | Test Steps | Expected Result | Test Type |
|---------|-----------------|------------|-----------------|-----------|
| TC-016 | Verify Date of Birth field accepts valid date | 1. Select a valid date from the date picker | Date should be accepted and displayed correctly | Positive |
| TC-017 | Verify Date of Birth field validation for future dates | 1. Try to select a future date | System should either prevent selection or show an error | Negative |
| TC-018 | Verify Date of Birth field for edge dates | 1. Select February 29th on a leap year<br>2. Select February 29th on a non-leap year | Leap year date should be accepted; non-leap year should not allow Feb 29 | Edge case |

#### 1.6 Subjects Field Tests

| Test ID | Test Description | Test Steps | Expected Result | Test Type |
|---------|-----------------|------------|-----------------|-----------|
| TC-019 | Verify Subjects field accepts valid subjects | 1. Enter valid subjects | Subjects should be accepted and displayed | Positive |
| TC-020 | Verify multiple subjects can be added | 1. Enter multiple subjects | All subjects should be displayed correctly | Positive |

#### 1.7 Hobbies Checkbox Tests

| Test ID | Test Description | Test Steps | Expected Result | Test Type |
|---------|-----------------|------------|-----------------|-----------|
| TC-021 | Verify single hobby selection | 1. Select one hobby checkbox | The selected hobby should be checked | Positive |
| TC-022 | Verify multiple hobbies selection | 1. Select multiple hobby checkboxes | All selected hobbies should be checked | Positive |

#### 1.8 Picture Upload Tests

| Test ID | Test Description | Test Steps | Expected Result | Test Type |
|---------|-----------------|------------|-----------------|-----------|
| TC-023 | Verify picture upload with valid image file | 1. Click on upload button<br>2. Select valid image file (jpg, png, etc.) | Image should be uploaded successfully | Positive |
| TC-024 | Verify picture upload with invalid file type | 1. Try to upload non-image file (e.g., .pdf, .txt) | Error message should indicate only image files are allowed | Negative |
| TC-025 | Verify picture upload with large file size | 1. Try to upload very large image file | System should either handle it or show appropriate error | Edge case |

#### 1.9 Current Address Tests

| Test ID | Test Description | Test Steps | Expected Result | Test Type |
|---------|-----------------|------------|-----------------|-----------|
| TC-026 | Verify Current Address field accepts valid input | 1. Enter valid address text | Address should be accepted | Positive |
| TC-027 | Verify Current Address field with long text | 1. Enter very long address text | System should handle long text appropriately | Edge case |

#### 1.10 State and City Selection Tests

| Test ID | Test Description | Test Steps | Expected Result | Test Type |
|---------|-----------------|------------|-----------------|-----------|
| TC-028 | Verify State dropdown displays options | 1. Click on State dropdown | List of states should be displayed | Positive |
| TC-029 | Verify City dropdown is dependent on State selection | 1. Select a state<br>2. Check city dropdown | City dropdown should show cities relevant to selected state | Positive |
| TC-030 | Verify City dropdown is disabled until State is selected | 1. Check City dropdown before selecting a state | City dropdown should be disabled | Negative |

### 2. Form Submission Tests

| Test ID | Test Description | Test Steps | Expected Result | Test Type |
|---------|-----------------|------------|-----------------|-----------|
| TC-031 | Verify successful form submission with all valid required fields | 1. Fill all required fields with valid data<br>2. Click Submit button | Form should be submitted successfully with confirmation message | Positive |
| TC-032 | Verify form submission with only required fields | 1. Fill only required fields<br>2. Leave optional fields empty<br>3. Click Submit button | Form should be submitted successfully | Positive |
| TC-033 | Verify form submission prevention with missing required fields | 1. Leave some required fields empty<br>2. Click Submit button | Form submission should be prevented with appropriate error messages | Negative |

### 3. UI/UX Testing

| Test ID | Test Description | Test Steps | Expected Result | Test Type |
|---------|-----------------|------------|-----------------|-----------|
| TC-034 | Verify form layout and alignment | 1. Observe the form layout | All elements should be properly aligned and visually consistent | UI validation |
| TC-035 | Verify form field labels are clear and visible | 1. Check all field labels | All labels should be clearly visible and properly associated with their fields | UI validation |
| TC-036 | Verify error messages are displayed near the relevant fields | 1. Submit form with errors<br>2. Observe error message placement | Error messages should appear near the relevant fields | UI validation |
| TC-037 | Verify form is accessible via keyboard navigation | 1. Navigate through form using Tab key | All form elements should be accessible in a logical order | UI validation |
| TC-038 | Verify form controls have appropriate focus indicators | 1. Tab through form elements | Active elements should have clear focus indicators | UI validation |

### 4. Browser Compatibility

| Test ID | Test Description | Test Steps | Expected Result | Test Type |
|---------|-----------------|------------|-----------------|-----------|
| TC-039 | Verify form functionality in Chrome | 1. Open form in Chrome<br>2. Test basic functionality | Form should work as expected | Compatibility |
| TC-040 | Verify form functionality in Firefox | 1. Open form in Firefox<br>2. Test basic functionality | Form should work as expected | Compatibility |
| TC-041 | Verify form functionality in Safari | 1. Open form in Safari<br>2. Test basic functionality | Form should work as expected | Compatibility |
| TC-042 | Verify form functionality in Edge | 1. Open form in Edge<br>2. Test basic functionality | Form should work as expected | Compatibility |

### 5. Responsiveness Testing

| Test ID | Test Description | Test Steps | Expected Result | Test Type |
|---------|-----------------|------------|-----------------|-----------|
| TC-043 | Verify form display on desktop | 1. View form on desktop resolution | Form should display properly | Responsiveness |
| TC-044 | Verify form display on tablet | 1. View form on tablet resolution | Form should adjust to screen size | Responsiveness |
| TC-045 | Verify form display on mobile | 1. View form on mobile resolution | Form should be usable on small screens | Responsiveness |

## Summary

This test case includes:
- 45 detailed test cases
- Coverage of all major form components
- Positive, negative, and edge cases
- UI/UX validations
- Browser compatibility tests
- Responsiveness tests