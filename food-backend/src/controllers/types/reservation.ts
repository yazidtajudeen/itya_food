export interface CreateReservationBody {
	dateTime: string | Date;
	partySize: number;
	timeSlot?: string;
	durationMinutes?: number;
	seatingPreference?: 'indoor' | 'outdoor' | 'window' | 'bar' | 'booth';
	extraServices?: string[];
} 