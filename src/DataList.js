import React, { useState, useEffect} from 'react';
import BootstrapTable from 'react-bootstrap-table-next'
import 'bootstrap/dist/css/bootstrap.min.css';
import allSongs from './resources/songData.json'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import './App.css';
import paginationFactory from 'react-bootstrap-table2-paginator'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'

function DataList(){
    const [songsList, setSongsList] = useState([]);
    const columns = [
        {dataField:'song', text: 'Song', sort: true},
        {dataField:'artist', text: 'Artist', sort: true},
        {dataField:'songReleaseDate', text: 'SongReleaseDate', sort: true},
        {dataField:'playCount', text: 'PlayCount', sort: true},
        {dataField:'metricA', text: 'MetricA', sort: true},
        {dataField:'metricB', text: 'MetricB', sort: true},
        {dataField:'metricC', text: 'MetricC', sort: true},
        {dataField:'metricD', text: 'MetricD', sort: true},
        {dataField:'metricE', text: 'MetricE', sort: true},
        {dataField:'metricF', text: 'MetricF', sort: true},
        {dataField:'metricG', text: 'MetricG', sort: true},
        {dataField:'metricH', text: 'MetricH', sort: true},
        {dataField:'metricI', text: 'MetricI', sort: true},
        {dataField:'metricJ', text: 'MetricJ', sort: true},
        {dataField:'metricK', text: 'MetricK', sort: true},
        {dataField:'metricL', text: 'MetricL', sort: true},
        {dataField:'metricM', text: 'MetricM', sort: true},
        {dataField:'metricN', text: 'MetricN', sort: true},
        {dataField:'metricO', text: 'MetricO', sort: true},
        {dataField:'metricP', text: 'MetricP', sort: true}
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
        onPageChange: function(page, sizePerPage){
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage) {
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        }
    });

    useEffect(()=>{
        var filteredSongsData = []
        allSongs.map((curr)=>{
            if(Date.parse(curr.songReleaseDate) > 0) filteredSongsData.push(curr);
        })
        console.log(filteredSongsData)
        setSongsList(filteredSongsData)
    },[])
    return <div>
        <BootstrapTable bootstrap4 wrapperClasses="table-responsive"
                                     rowClasses="text-nowrap" keyField='song'
                                      columns={columns} data={songsList}
                                       pagination={pagination}/>

    </div>
}

export default DataList;