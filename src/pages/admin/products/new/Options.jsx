import React, { useState, useCallback } from "react";
import { Select, Stack, DataTable, Tag } from "@shopify/polaris";

export default function Options(props) {
    const options = [
        { label: 'Size', value: 'Size' },
        { label: 'Color', value: 'Color' },
    ];
    
    const [selected, setSelected] = useState('Size');
    const [selectedTags, setSelectedTags] = useState(['M', 'L']);

    const handleSelectChange = useCallback((value) => setSelected(value), []);

    const removeTag = useCallback(
        (tag) => () => {
            setSelectedTags((previousTags) =>
                previousTags.filter((previousTag) => previousTag !== tag),
            );
        },
        [],
    );

    const tagMarkup = selectedTags.map((option) => (
        <Tag key={option} onRemove={removeTag(option)}>{option}</Tag>
    ));

    return (<DataTable columnContentTypes={['text', 'text']} headings={['', '']}
        rows={[
            [<Select options={options} onChange={handleSelectChange} value={selected} />, 
                <Stack spacing="tight">{tagMarkup}</Stack>],
            [<Select options={options} onChange={handleSelectChange} value={selected} />, 
                <Stack spacing="tight">{tagMarkup}</Stack>],
        ]}
    />)
}