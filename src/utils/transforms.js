export const toDate = date => {
    const formattedDate = new Date(date);

    return Intl.DateTimeFormat('es-ES', {
        dateStyle: 'medium',
    }).format(formattedDate);
};
