import React, { useState, useEffect} from 'react';
import BootstrapTable from 'react-bootstrap-table-next'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import './App.css';
import paginationFactory from 'react-bootstrap-table2-paginator'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import filterFactory, {textFilter, dateFilter} from 'react-bootstrap-table2-filter'
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'

function DataList(){
    const [songsList, setSongsList] = useState([]);
    const columns = [
        {dataField:'song', text: 'Song', sort: true, filter: textFilter()} ,
        {dataField:'artist', text: 'Artist', sort: true, filter: textFilter()},
        {dataField:'songReleaseDate', text: 'SongReleaseDate', sort: true, sortFunc: (a, b, order, dataField, rowA, rowB) => {
                                                                                if (order === 'asc')
                                                                                {
                                                                                  return Date.parse(a) - Date.parse(b)
                                                                                }
                                                                               else if (order === 'desc') {
                                                                                  return  Date.parse(b) - Date.parse(a)
                                                                                }
                                                                            }, filter: dateFilter()},
        {dataField:'playCount', text: 'PlayCount', sort: true, filter: textFilter()},
        {dataField:'metricA', text: 'MetricA', sort: true, filter: textFilter()},
        {dataField:'metricB', text: 'MetricB', sort: true, filter: textFilter()},
        {dataField:'metricC', text: 'MetricC', sort: true, filter: textFilter()},
        {dataField:'metricD', text: 'MetricD', sort: true, filter: textFilter()},
        {dataField:'metricE', text: 'MetricE', sort: true, filter: textFilter()},
        {dataField:'metricF', text: 'MetricF', sort: true, filter: textFilter()},
        {dataField:'metricG', text: 'MetricG', sort: true, filter: textFilter()},
        {dataField:'metricH', text: 'MetricH', sort: true, filter: textFilter()},
        {dataField:'metricI', text: 'MetricI', sort: true, filter: textFilter()},
        {dataField:'metricJ', text: 'MetricJ', sort: true, filter: textFilter()},
        {dataField:'metricK', text: 'MetricK', sort: true, filter: textFilter()},
        {dataField:'metricL', text: 'MetricL', sort: true, filter: textFilter()},
        {dataField:'metricM', text: 'MetricM', sort: true, filter: textFilter()},
        {dataField:'metricN', text: 'MetricN', sort: true, filter: textFilter()},
        {dataField:'metricO', text: 'MetricO', sort: true, filter: textFilter()},
        {dataField:'metricP', text: 'MetricP', sort: true, filter: textFilter()}
    ]

    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 11,
        lastPageText: '>>',
        firstPageTest: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
    });

    useEffect(()=>{
        fetch('https://vnb7xjwr02.execute-api.us-east-1.amazonaws.com/Prod/hello')
            .then(response => response.json())
            .then((allSongs)=>{
                var filteredSongsData = []
                allSongs.message.map((curr)=>{
                    if(Date.parse(curr.songReleaseDate) > 0) filteredSongsData.push(curr);
                })
                console.log(filteredSongsData)
                setSongsList(filteredSongsData)
            })

    },[])
    return <div>
        <BootstrapTable bootstrap4 wrapperClasses="table-responsive"
                                     rowClasses="text-nowrap" keyField='song'
                                      columns={columns} data={songsList}
                                       pagination={pagination} filter= {filterFactory()}/>

    </div>
}

export default DataList;