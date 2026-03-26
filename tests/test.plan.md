# QA Playground Feature Test Plan

## Application Overview

Test plan for QA Playground site features: code generator, rating range slider, and changeable iframe. Includes happy paths, edge cases, and validation scenarios.

## Test Scenarios

### 1. QA Playground Core Features

**Seed:** `tests/seed.spec.ts`

#### 1.1. QA Code Generator Module

**File:** `tests/QAPlayground.CodeGenerator.spec.ts`

**Steps:**
  1. Navigate to https://qaplayground.dev/ and open the Code Generator section (or equivalent UI).
    - expect: Code generator UI is present and visible (title, input fields, generate button).
  2. Enter a valid input case into the code generator (e.g., simple test scenario description).
    - expect: Input is accepted, no error is displayed.
  3. Click the Generate/Run button (or equivalent).
    - expect: Generated code appears in output pane or code editor.
    - expect: A success indicator appears.
  4. Copy generated code to clipboard if feature exists; otherwise validate code syntax quickly by checking JSON/source format.
    - expect: Clipboard operation success or code format is valid.
  5. Pick an invalid input (empty or malformed) and request generation.
    - expect: The system shows validation error or helpful message; no crash.

#### 1.2. Rating Range Slider Interaction

**File:** `tests/QAPlayground.RatingRangeSlider.spec.ts`

**Steps:**
  1. Open QA Playground and navigate to the Rating/Range Slider component page.
    - expect: Slider component is present with min/max labels, current value displayed.
  2. Drag the slider handle to minimum position (0 or first value).
    - expect: Value updates to minimum; visual indicator moves to start.
  3. Drag slider to maximum position and verify value updates accordingly.
    - expect: Value updates to maximum; indicator at end.
  4. Set slider to mid-range value and check expected text/numeric display updates.
    - expect: Value reflects chosen location (e.g., 50).
  5. Use keyboard controls (Arrow keys / PageUp/PageDown) on slider handle.
    - expect: Value changes in expected increment steps.
  6. Attempt an invalid range assignment (if available via input) such as outside min/max.
    - expect: Application rejects and shows validation; slider clamps to nearest boundary.

#### 1.3. Changeable IFrame Behavior

**File:** `tests/QAPlayground.ChangeableIframe.spec.ts`

**Steps:**
  1. Navigate to the IFrame demo page on QA Playground.
    - expect: iFrame container is displayed with controls to change content.
  2. Click to load first iframe content (e.g., 'Load Frame 1' button).
    - expect: iFrame loads expected URL/inner page.
    - expect: A marker/text inside iframe appears correctly.
  3. Change iframe source to another link (e.g., 'Switch to Frame 2').
    - expect: iFrame updates with new content.
    - expect: Old content is replaced; no stale DOM remains.
  4. Run an action inside the nested iframe (if nested example present) such as clicking a button in frame, then assert result appears.
    - expect: Inner control triggers expected behavior and updates are seen by outer page if applicable.
  5. Check that iframe can be resized if UI supports; verify no content overflow or broken layout.
    - expect: iFrame adapts and content remains accessible.
  6. Simulate iframe fail path by setting an invalid src and ensure graceful error message or fallback content.
    - expect: Error state is handled; user sees friendly message, no application crash.
