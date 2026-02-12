import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CourseState {
    selectedCourseId: string | null;
    isModalOpen: boolean;
}

const initialState: CourseState = {
    selectedCourseId: null,
    isModalOpen: false,
};

export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        selectCourse: (state, action: PayloadAction<string>) => {
            state.selectedCourseId = action.payload;
        },
        toggleModal: (state, action: PayloadAction<boolean>) => {
            state.isModalOpen = action.payload;
        },
    },
});

export const { selectCourse, toggleModal } = courseSlice.actions;
export default courseSlice.reducer;
