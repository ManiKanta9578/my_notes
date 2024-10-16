import React, { useEffect, useState } from 'react';
import { fetchNotesByTechnology } from '../services/api';
import LoadingSpinner from '@/src/components/LoadingSpinner';
import NoteCard from '@/src/components/NoteCard';

const JavaScript = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    const getNotes = async () => {
        setLoading(true);
        try {
            const { data } = await fetchNotesByTechnology('JavaScript');
            setNotes(data);
        } catch (error) {
            console.error("Error fetching notes:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getNotes();
    }, []);

    return (
        <div className="container mx-auto px-4 mt-20">
            {loading
                ? (<LoadingSpinner />)
                : (
                    <div className="grid gap-2">
                        {notes.length > 0 ? (
                            notes.map(note => <NoteCard key={note._id} note={note} />)
                        ) : (
                            <p className="text-gray-500">No notes found</p>
                        )}
                    </div>
                )}
        </div>
    );
};

export default JavaScript;
